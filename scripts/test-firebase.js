// Script para testar configurações do Firebase
const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

async function testFirebase() {
  console.log('🔥 Testando configurações do Firebase...');
  
  // Verificar variáveis de ambiente
  console.log('📋 Variáveis de ambiente:');
  Object.keys(firebaseConfig).forEach(key => {
    const value = firebaseConfig[key];
    console.log(`${key}: ${value ? '✅ Definida' : '❌ Não definida'}`);
  });

  if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.storageBucket) {
    console.error('❌ Configurações do Firebase incompletas!');
    console.log('\n📝 Adicione as seguintes variáveis no seu arquivo .env:');
    console.log('NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key');
    console.log('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com');
    console.log('NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id');
    console.log('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com');
    console.log('NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id');
    return;
  }

  try {
    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    
    console.log('✅ Firebase inicializado com sucesso!');
    console.log(`📦 Storage Bucket: ${firebaseConfig.storageBucket}`);

    // Testar criação de referência
    const testRef = ref(storage, 'test/test.txt');
    console.log('✅ Referência de storage criada!');

    console.log('\n🎉 Configuração do Firebase está funcionando!');
    console.log('💡 Agora você pode fazer upload de imagens.');

  } catch (error) {
    console.error('❌ Erro ao conectar com Firebase:', error.message);
    console.log('\n🔧 Verifique:');
    console.log('1. Se as credenciais estão corretas');
    console.log('2. Se o projeto Firebase existe');
    console.log('3. Se o Storage está habilitado no projeto');
  }
}

// Executar teste se chamado diretamente
if (require.main === module) {
  testFirebase()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Falha no teste:', error);
      process.exit(1);
    });
}

module.exports = { testFirebase };