import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-5 border-t border-gray-800 py-5">
        <div className=" container mx-auto px-6 " id="myfooter">
            <div className="flex justify-between justify-items-center flex-wrap gap-6">
                <div>   
                <h2 className="font-bold mb-4 text-xl">My Website</h2>
                <p>www.mywebsite.com</p>
                </div>

                {/* Social Media Links */}
                <div>
                <h2 className="font-bold mb-4 text-xl">Follow Me</h2>
                <ul className=" flex flex-col gap-2">
                    <li><Link href="https://www.facebook.com/earlsteven.pacaldo.3/">Facebook</Link></li>
                    <li><Link href="https://www.twitter.com/">Twitter</Link></li>
                    <li><Link href="https://www.instagram.com/">Instagram</Link></li>
                    <li><Link href="https://www.linkedin.com/in/earlsteven-pacaldo-5b4b2521b/">LinkedIn</Link></li>
                </ul>
                </div>

                {/* Quick Links */}
                <div>
                <h2 className="font-bold mb-4 text-xl">Quick Links</h2>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="font-bold mb-4 text-xl">Contact Me</h2>
                    <ul>
                        <li>Email: earlstevenpacaldo@gmail.com</li>
                        <li>Phone: 09123456789</li>
                        
                    </ul>
                </div>

            </div>
            
        </div>

        <div className="w-full text-center mt-4 border-t border-gray-300 pt-4">
                    <p className="text-sm text-gray-500">© 2026 MyWebsite. All rights reserved.</p>
                </div>
    </footer>
  )
  }