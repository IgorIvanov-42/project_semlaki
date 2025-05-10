import { Link, useParams } from "react-router-dom"
import { PageContainer, CategoriesGrid, CategoryCard } from "./styles"
import axios from "axios"
import { useEffect, useState } from "react"

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
