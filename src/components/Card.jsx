import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: ${({ theme }) => theme.other.radii};
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.font.size.middle};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.font.weight.light};

  & > b {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
