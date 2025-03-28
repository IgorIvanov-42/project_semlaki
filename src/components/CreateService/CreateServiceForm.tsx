import type React from "react"

import { useState, useEffect } from "react"
import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"

interface CreateServiceFormProps {
  service?: { id: number; name: string; description: string }
  onSubmit: (service: {
    id?: number
    name: string
    description: string
    contact: string
    image: File | null
  }) => void
}
const CreateServiceForm: React.FC<CreateServiceFormProps> = ({
  service,
  onSubmit,
}) => {
  const [name, setName] = useState<string>(service ? service.name : "")
  const [description, setDescription] = useState<string>(
    service ? service.description : "",
  )
  const [contact, setContact] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const [error, setError] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  useEffect(() => {
    if (service) {
      setName(service.name)
      setDescription(service.description)
    }
  }, [service])
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
    onSubmit({
      id: service ? service.id : undefined,
      name,
      description,
      contact,
      image,
    })
    setSuccessMessage("Service successfully published!")
    setIsSubmitting(false)
    // Сброс полей формы после успешной отправки
    setName("")
    setDescription("")
    setContact("")
    setImage(null)
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
      <label>
        Upload Photo:
        <input
          type="file"
          accept="image/*"
          onChange={e => {
            if (e.target.files) {
              setImage(e.target.files[0])
            }
          }}
        />
      </label>
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
