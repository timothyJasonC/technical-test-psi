import { useEffect, useState } from 'react';

type User = {
  name: string,
  location: string,
  email: string,
  age: number,
  phone: string,
  cell: string,
  picture: string[]
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  async function fetchUser() {
    const res = await fetch('http://localhost:3000/user')
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">List</h2>
      <div className="mb-4 w-full flex items-center  justify-between">
        <div className='flex items-center border-black border-2 rounded-lg'>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-l-lg px-4 py-2 w-80"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 bg-gray-300 border-black rounded-r-lg py-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        <button className="items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + New Data
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Umur</th>
            <th className="py-2 px-4">Alamat</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">No. Telepon 1</th>
            <th className="py-2 px-4">No. Telepon 2</th>
            <th className="py-2 px-4">Gambar</th>
          </tr>
        </thead>
        <tbody>
        {filteredUsers.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.age}</td>
              <td className="py-2 px-4">{user.location}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.phone}</td>
              <td className="py-2 px-4">{user.cell}</td>
              <td className="py-2 px-4">
                <img src={user.picture[0]} alt="User" className="h-16 w-16 object-cover rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  )
}

export default App
