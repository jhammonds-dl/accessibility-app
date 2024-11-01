import { imageList } from "../../assets/imageList";

export default function JSImage() {
  return (
    <ul>
      {imageList.map((item) => (
        <li key={item.img}>
          <img src={item.img} alt={item.title} width={500} tabIndex={0} />
        </li>
      ))}
    </ul>
  );
}
