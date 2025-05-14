import { useEffect, useState } from "react";
import AvatarCard from "./components/AvatarCard";
import AvatarModal from "./components/AvatarModel";
import Header from "./components/Header";
// import AvatarModal from "./components/AvatarModal";

function App() {
  const [avatars, setAvatars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch avatar data from Reqres API
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.users) {
          const users = data.users;
          setAvatars(
            users.map((user) => ({
              name: `${user.firstName} ${user.lastName}`,
              avatar: user.image,
            }))
          );
        } else {
          console.error("Unexpected API response", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);
  
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {avatars.map((user, index) => (
            <AvatarCard key={index} name={user.name} avatar={user.avatar} />
          ))}
        </div>
      </main>
 
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        + Create New Avatar
      </button>

      <AvatarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
// This code is a simple React application that fetches and displays user avatars from the Reqres API.