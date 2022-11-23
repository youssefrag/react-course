import "./directory.styles.scss";

import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
