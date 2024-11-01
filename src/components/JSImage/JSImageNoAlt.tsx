import { imageList } from "../../assets/imageList";

export default function JSImageNoAlt() {
  return (
    <ul>
      {imageList.map((item) => (
        <li key={item.img}>
          <img src={item.img} width={500} tabIndex={0} />
        </li>
      ))}
    </ul>
  );
}
