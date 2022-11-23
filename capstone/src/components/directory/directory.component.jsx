import { DirectoryContainer } from "./directory.styles";

import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => (
  <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
