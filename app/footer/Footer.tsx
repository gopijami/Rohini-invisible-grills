export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-8 p-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h4 className="font-semibold">Rohini Invisible Grills</h4>
          <p className="text-sm text-gray-600">Address: 123, Example Street, Hyderabad</p>
          <p className="text-sm text-gray-600">Phone: +91 99 0000 0000</p>
        </div>
        <div>
          <h5 className="font-medium">Services</h5>
          <ul className="text-sm text-gray-600">
            <li>Invisible Grills</li>
            <li>Balcony Safety Nets</li>
            <li>Anti Bird Nets</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Follow</h5>
          <div className="flex gap-3 mt-2">
            <a className="text-sm text-gray-600">Facebook</a>
            <a className="text-sm text-gray-600">Instagram</a>
            <a className="text-sm text-gray-600">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Rohini Invisible Grills. All rights reserved.</div>
    </footer>
  )
}
