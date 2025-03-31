import { Link, useParams } from "react-router-dom"
import { PageContainer, CategoriesGrid, CategoryCard } from "./styles"
import axios from "axios"
import { useEffect, useState } from "react"

/* const categories = [
  { title: "Services", description: "Services and announcements.", image: "/src/assets/services.webp" },
  { title: "Children's Leisure", description: "Entertainment and clubs for children.", image: "/src/assets/Childcare.jpg" },
  { title: "Announcements", description: "Buy and sell items.", image: "/src/assets/Translation.jpg" },
  { title: "Education", description: "Courses and educational institutions.", image: "/src/assets/images.jpg" },
  { title: "Medicine", description: "Doctors and medical services.", image: "/src/assets/Med.jpg" },
  { title: "IT in Germany", description: "IT innovations, job opportunities.", image: "/src/assets/it.jpg" },
  { title: "Parents and Children", description: "Activities for families.", image: "/src/assets/Parents1.jpg" },
  { title: "Meet & Chat", description: "Meet new people and make connections.", image: "/src/assets/Com.jpg" },
] */

interface Categorie {
  id: number
  description: string
  title: string
  photo: string
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Categorie[]>([])

  async function fetchCategories() {
    const { data } = await axios.get("/api/categories")
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <PageContainer>
      {/* <h1>Categories</h1> */}
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={category.id}>
            <Link
              to={`/category/${category.id}/services`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h2>{category.title}</h2>
              <img src={category.photo} alt={category.title} />
              <p>{category.description}</p>
            </Link>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </PageContainer>
  )
}

export default Categories
