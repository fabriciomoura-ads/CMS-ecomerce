import Link from 'next/link';
import { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer mt-auto py-3 bg-white text-center">
                <div className="container">
                    <span className="text-muted">
                        {' '}
                        Copyright © <span id="year"> 2024</span>{' '}
                        <Link href="#!" className="text-primary">
                            Solid Tecnologia
                        </Link>
                        . Feito com{' '}
                        <span className="bi bi-heart-fill text-danger"></span>{' '}
                        pela{' '}
                        <Link href="#!">
                            <span className="fw-semibold text-primary text-decoration-underline">
                                Solid
                            </span>
                        </Link>{' '}
                        Todos os direitos reservados
                    </span>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
