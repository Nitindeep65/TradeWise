"use client";
export default function Footer() {
  const footerLinks = {
    product: ['Features', 'Pricing', 'API', 'Enterprise'],
    resources: ['Documentation', 'Tutorials', 'Blog', 'Support'],
    company: ['About', 'Careers', 'Press', 'Legal']
  };

  return (
    <footer className="border-t border-white/5 px-6 py-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-xl font-black mb-4">TradeWise</div>
            <p className="text-white/50 text-sm leading-relaxed">
              The next-generation trading platform that combines cutting-edge AI with institutional-grade execution.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/80 font-semibold mb-6 text-sm">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-emerald-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/80 font-semibold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-emerald-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/80 font-semibold mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-emerald-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          © 2025 TradeWise. All rights reserved. Trade with confidence.
        </div>
      </div>
    </footer>
  );
}
