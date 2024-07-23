import Image from "next/image";

const Navbar: React.FC = () => {
	return (
		<div>
			<nav className="fixed top-0 left-0 w-full z-10">
				<div className="flex flex-wrap items-center justify-between w-full p-4">
					<a className="flex items-center space-x-3">
						<Image
							src="/image4.png"
							width={200}
							height={200}
							alt="agromanager Logo"
						/>
					</a>
					<div
						className="hidden w-full md:block md:w-auto"
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 md:mt-0 md:border-0">
							<li>
								<a
									href="#"
									className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
								>
									About us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 ">
						<p className="text-white">sign in</p>
						<p className="text-white">sign up</p>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
