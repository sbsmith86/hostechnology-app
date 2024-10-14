import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-secondary">
            <a className="flex-1" href="/">
                <img src="/images/hostech-logo.png" alt="Logo" className="h-12 w-auto" />
                <span className="font-montserrat text-white text-xl font-bold">Hostechnology</span>
            </a>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a
                            className="btn btn-ghost font-montserrat text-white"
                            target="_blank"
                            href="https://www.linkedin.com/in/shaebryantsmith/" rel="noreferrer">
                                LinkedIn
                        </a>
                    </li>
                    {/* If I want a submenu <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
