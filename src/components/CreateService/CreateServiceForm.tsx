import { useState, useEffect } from "react"
import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"
import axios from "axios"

interface Category {
  id: number
  description: string
  title: string
  photo: string
}

const CreateServiceForm: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])

  async function fetchCategories() {
    const { data } = await axios.get("/api/categories")
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  const [name, setName] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [contact, setContact] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  useEffect(() => {}, [])
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setError("")
    setSuccessMessage("")
    setIsSubmitting(true)
    // Валидация описания
    if (description.length < 50) {
      setError("Description must be at least 50 characters long")
      setIsSubmitting(false)
      return
    }
    // Валидация контактной информации
    if (contact.trim() === "") {
      setError("Contact information is required")
      setIsSubmitting(false)
      return
    }

    axios.post(
      "/api/services",
      {
        title: name,
        description,
        categoryId: category,
        photo: image,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      },
    )
    setSuccessMessage("Service successfully published!")
    setIsSubmitting(false)
    // Сброс полей формы после успешной отправки
    setName("")
    setDescription("")
    setContact("")
    setImage("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        name="serviceName"
        label="Service Name"
        type="text"
        placeholder="Enter service name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <MyInput
        name="serviceDescription"
        label="Service Description"
        type="text"
        placeholder="Enter service description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <MyInput
        name="contactInfo"
        label="Contact Information"
        type="text"
        placeholder="Enter contact information"
        value={contact}
        onChange={e => setContact(e.target.value)}
        required
      />
      <MyInput
        name="image"
        label="Image"
        type="text"
        placeholder="Enter URL for photo"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      />

      <select
        name=""
        id=""
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map(c => (
          <option value={c.id}>{c.title}</option>
        ))}
      </select>
      <Button text="Send" type="submit" disabled={isSubmitting} />
      {successMessage && (
        <div style={{ color: "green", marginTop: "10px" }}>
          {" "}
          {successMessage}{" "}
        </div>
      )}
    </form>
  )
}
export default CreateServiceForm