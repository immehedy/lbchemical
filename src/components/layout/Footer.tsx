import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-[#1c2531] text-gray-300">
			<div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Company Info */}
				<div>
					<Image
						src="/logo.jpg"
						alt="LB Chemical Industries"
						width={140}
						height={40}
						className="mb-4"
					/>
					<p className="text-sm">
						Leading provider of water treatment solutions for industrial applications worldwide.
					</p>
				</div>

				{/* Services */}
				<div>
					<h4 className="text-white font-semibold mb-4">Services</h4>
					<ul className="space-y-2 text-sm">
						<li>Water Purification</li>
						<li>Chemical Treatment</li>
						<li>Wastewater Treatment</li>
						<li>System Maintenance</li>
					</ul>
				</div>

				{/* Industries */}
				<div>
					<h4 className="text-white font-semibold mb-4">Industries</h4>
					<ul className="space-y-2 text-sm">
						<li>Manufacturing</li>
						<li>Pharmaceuticals</li>
						<li>Food & Beverage</li>
						<li>Power Generation</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h4 className="text-white font-semibold mb-4">Contact</h4>
					<ul className="space-y-2 text-sm">
						<li>📞 +88 01711533605, +88 01897717462</li>
						<li>✉️ info@lbchemicalindustries.com</li>
						<li>🏢 Office Address: 47/4 Toyenbee Circular Road (3rd Floor), Dhaka-1100, Bangladesh</li>
						<li>🏢 Factory Address: South Baghapur, Abdullahpur, Keraniganj, Abdullahpur, Dhaka</li>
					</ul>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="border-t border-gray-700 py-6 px-4 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
				<p className="text-gray-400">
					© {new Date().getFullYear()} LB Chemical Industries. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
