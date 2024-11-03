import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

const LandingPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div>
            <Navbar />
            <main className="flex-grow bg-gray-100 flex items-center justify-center">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Logo Section */}
                        <h1 className="text-4xl font-bold mb-6">
                            <span className="text-black-600">Connect with help or volunteer opportunities</span>
                        </h1>
                        <p className="text-xl mb-8 text-black-600">HELPNET brings together adults in need and caring volunteers</p>
                        
                        {user ? (
                            <Link to="/authorized">
                                <button
                                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                    Get Started
                                </button>
                            </Link>
                        ) : (
                            <div className="flex flex-row justify-center gap-4 overflow-x-auto">
                                <Link to="/register-adult">
                                    <button
                                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                        Sign up as Adult
                                    </button>
                                </Link>
                                <Link to="/register-volunteer">
                                    <button
                                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300">
                                        Sign up as Volunteer
                                    </button>
                                </Link>
                                <Link to="/register-organization">
                                    <button
                                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                        Sign up as Organization
                                    </button>
                                </Link>
                                <Link to="/register-beneficiary">
                                    <button
                                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                        Sign up as Beneficiary
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="mt-16 flex justify-center space-x-8 text-center">
                        <div>
                            <p className="text-3xl font-bold">5,878</p>
                            <p className="text-gray-600">Volunteers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">48,400</p>
                            <p className="text-gray-600">Help Requests</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">117,441</p>
                            <p className="text-gray-600">Connections Made</p>
                        </div>
                    </div>

                    {/* Sign-in Link */}
                    <div className="mt-8 text-center">
                    <p className="text-gray-700 text-xl">
                        Have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline text-xl">
                            Sign in here!
                        </Link>
                    </p>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LandingPage;