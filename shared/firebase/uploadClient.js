'use client';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/firebaseapi';

function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

/**
 * Faz upload do File para Firebase Storage e retorna a URL pública.
 * @param {File} file
 * @param {string} folder - pasta no bucket (ex.: 'images', 'products')
 */
export async function uploadImageAndGetUrl(file, folder = 'images') {
  try {
    if (!file) throw new Error('Arquivo inválido');

    const name = file.name || 'file.bin';
    const ext = name.includes('.') ? name.split('.').pop() : 'bin';
    const base = name.replace(/\.[^.]+$/, '').slice(0, 40);
    const path = `${folder}/${Date.now()}-${uid()}-${base}.${ext}`;

    const storageRef = ref(storage, path);
    const snap = await uploadBytes(storageRef, file, {
      contentType: file.type || 'application/octet-stream',
    });

    const downloadURL = await getDownloadURL(snap.ref);
    return downloadURL;
  } catch (error) {
    console.error('Erro no upload do Firebase:', error);
    throw new Error(`Falha no upload: ${error.message}`);
  }
}
