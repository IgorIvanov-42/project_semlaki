import { Link } from "react-router-dom"
import { PageContainer, CategoriesGrid, CategoryCard } from "./styles"

const categories = [
  { title: "Услуги", description: "" },

  { title: "Знакомства/Общение", description: "Общение и новые знакомства." },

  { title: "Объявления", description: "Покупка и продажа вещей." },

  {
    title: "Образование",
    description: " Курсы, учебные заведения вашего города",
  },

  { title: "Медицина", description: "Врачи и медицинские услуги." },
  {
    title: "Досуг для детей",
    description: "Развлечения и кружки для детей.",
  },
  {
    title: "IT",
    description: " IT в Германии.",
  },
  {
    title: " Родители и дети ",
    description: " Совместное времяпровождение ",
  },
]

const Categories: React.FC = () => {
  return (
    <PageContainer>
      <h1>Categories</h1>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            {index === 0 ? (
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <h2>{category.title}</h2>{" "}
                <img src="/src/assets/8.jpg" alt={category.title} />{" "}
                <p>{category.description}</p>{" "}
              </Link>
            ) : (
              <>
                {" "}
                <h2>{category.title}</h2>{" "}
                <img src="/src/assets/8.jpg" alt={category.title} />{" "}
                <p>{category.description}</p>{" "}
              </>
            )}
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </PageContainer>
  )
}
export default Categories
