import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  const uploadImage = async () => {
    if (!file) return alert("Select file first");

    const formData = new FormData();
    formData.append("image", file);

    await axios.post("http://localhost:5000/api/upload", formData);

    fetchImages();
  };

  const fetchImages = async () => {
     const res = await axios.get("http://localhost:5000/api/images");

    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-red-500">hello</div>
      
      <h1 className="text-3xl font-bold mb-6">Image Upload App</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        
        <input
          type="file"
          className="border p-2 w-full rounded mb-4"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadImage}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Upload Image
        </button>

      </div>

      <div className="grid grid-cols-2   md:grid-cols-4 gap-4 mt-8">
        {images.map((img) => (
          <img 

            key={img._id}
            src={`http://localhost:5000/uploads/${img.imageUrl}`}
            alt=""
            className=" h-60 object-cover rounded-lg shadow"
          />
        ))}
      </div>
     

    </div>
  );
}

export default App;
