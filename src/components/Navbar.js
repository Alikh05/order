import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function Navbar({isAuth = false}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-green-600">HELPNET</Link>
                <nav>
                    <ul className="flex space-x-4">
                        {isAuth ? (
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                                >
                                    Logout
                                </button>
                            ) :
                            (
                                <div></div>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}