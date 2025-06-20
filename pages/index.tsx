import { FaShoppingBag } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex flex-col items-center justify-center text-center px-4">
      <FaShoppingBag className="text-green-600 text-9xl mb-8 drop-shadow-lg" />
      <h1 className="text-6xl font-extrabold text-black mb-4">FreshMart</h1>
      <p className="text-xl text-gray-700">Fresh groceries, delivered fast</p>
    </div>
  )
}
