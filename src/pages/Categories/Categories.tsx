import React from "react"
import { PageContainer, CategoriesGrid, CategoryCard } from "./styles"

const categories = [
  { title: "Услуги", description: "Поиск и предложение услуг." },
  {
    title: "Детский активитет",
    description: "Развлечения и кружки для детей.",
  },
  { title: "Учёба/Репетиторы", description: "Репетиторство и курсы." },
  { title: "Знакомства", description: "Общение и новые знакомства." },
  { title: "Медицина", description: "Врачи и медицинские услуги." },
  { title: "Объявления", description: "Покупка и продажа вещей." },
  { title: "Бизнес/Финансы", description: "Финансовые услуги и инвестиции." },
  { title: "Общение", description: "Форумы и группы по интересам." },
]

const Categories: React.FC = () => {
  return (
    <PageContainer>
      <h1>Categories</h1>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <h2>{category.title}</h2>
            <img src="/src/assets/8.jpg" alt={category.title} />
            <p>{category.description}</p>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </PageContainer>
  )
}

export default Categories
