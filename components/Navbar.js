import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Navigation items matching existing pages and planned structure
const navItems = [
  {
    id: 'buy',
    label: 'Buy',
    href: '/all-properties',
    children: [
      { label: 'All Properties', href: '/all-properties' },
      { label: 'The Estates at Lone Mountain', href: '/estates-lone-mountain' },
      { label: 'Lone Mountain Vista V', href: '/lone-mountain-vista-v' },
      { label: 'Buyer\'s Guide', href: '/buyers' },
    ],
  },
  {
    id: 'sell',
    label: 'Sell',
    href: '/sellers',
    children: [
      { label: 'Seller\'s Guide', href: '/sellers' },
      { label: 'Services', href: '/services' },
      { label: 'Market Reports', href: '/market-reports' },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    href: '/living-lone-mountain',
    children: [
      { label: 'Living in Lone Mountain', href: '/living-lone-mountain' },
      { label: 'Lone Mountain Regional Park', href: '/lone-mountain-park' },
      { label: 'Nearby Amenities', href: '/amenities' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// Simple SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const isActive = (href) => router.pathname === href;
  const isParentActive = (children) => children?.some((child) => router.pathname === child.href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Area - Phone Number */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-[#1a365d] text-white p-2 rounded-lg group-hover:bg-[#1E6BB8] transition-colors">
                  <PhoneIcon />
                </div>
                <div className="flex flex-col">
                  <a href="tel:702-222-1964" className="text-xl lg:text-2xl font-bold text-[#1a365d] tracking-tight hover:text-[#1E6BB8] transition-colors">
                    702-222-1964
                  </a>
                  <span className="text-xs text-gray-500 hidden sm:block">
                    Lone Mountain Vistas
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                      isActive(item.href) || isParentActive(item.children)
                        ? 'text-[#1E6BB8] bg-[#1a365d]/5'
                        : 'text-gray-700 hover:text-[#1a365d] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDownIcon />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.href)
                              ? 'text-[#1E6BB8] bg-[#1a365d]/5 font-medium'
                              : 'text-gray-600 hover:text-[#1a365d] hover:bg-gray-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/all-properties"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#1E6BB8] hover:bg-[#155A94] text-white text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Search Homes
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg ${
                        isActive(item.href)
                          ? 'text-[#1E6BB8] bg-[#1a365d]/5'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 text-sm rounded-lg ${
                              isActive(child.href)
                                ? 'text-[#1E6BB8] font-medium'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 px-4">
                <Link
                  href="/all-properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-[#1E6BB8] text-white font-semibold rounded-lg hover:bg-[#155A94] transition-colors"
                >
                  Search Homes
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
