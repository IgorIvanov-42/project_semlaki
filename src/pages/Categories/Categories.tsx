import { Link } from "react-router-dom"
import { PageContainer, CategoriesGrid, CategoryCard } from "./styles"

const categories = [
  { title: "Services", description: "", image: "/src/assets/services.webp" },
  { title: "Children's Leisure", description: "Entertainment and clubs for children.", image: "/src/assets/Childcare.jpg" },
  { title: "Announcements", description: "Buy and sell items.", image: "/src/assets/Translation.jpg" },
  { title: "Education", description: "Courses and educational institutions.", image: "/src/assets/images.jpg" },
  { title: "Medicine", description: "Doctors and medical services.", image: "/src/assets/Med.jpg" },
  { title: "IT in Germany", description: "IT innovations, job opportunities.", image: "/src/assets/it.jpg" },
  { title: "Parents and Children", description: "Activities for families.", image: "/src/assets/Parents1.jpg" },
  { title: "Dating/Communication", description: "Meet new people and make connections.", image: "/src/assets/Com.jpg" },
]

const Categories: React.FC = () => {
  return (
    <PageContainer>
      <h1>Categories</h1>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            {index === 0 ? (
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                <h2>{category.title}</h2>
                <img src={category.image} alt={category.title} />
                <p>{category.description}</p>
              </Link>
            ) : (
              <>
                <h2>{category.title}</h2>
                <img src={category.image} alt={category.title} />
                <p>{category.description}</p>
              </>
            )}
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </PageContainer>
  )
}

export default Categories

