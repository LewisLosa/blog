import Link from "next/link"

export function CmsNavbar() {
  return (
        <div className="py-2 text-center bg-slate-900">
          <Link href="/" className="text-gray-300 bg-slate-700 p-2 rounded-full">
            <span className="text-s font-thin">← Go back to eyüp&apos;s blog page 🏠</span>
          </Link>
        </div>
  )
}

