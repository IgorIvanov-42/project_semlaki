import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #333;
`;
