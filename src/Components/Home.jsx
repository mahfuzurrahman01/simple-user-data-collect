import React from 'react';

const Home = () => {
    return (
        <div>
            <section>
                <div className="bg-gray-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://img.freepik.com/free-vector/silhouette-skyline-illustration_53876-78786.jpg?w=996&t=st=1667294260~exp=1667294860~hmac=db5032925ec726056728739c7431fa48b41eeacc6844f0a8d0e82794f9a7e737" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
            </section>
        </div>
    );
};

export default Home;