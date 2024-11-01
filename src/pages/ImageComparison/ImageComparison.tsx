// import MUIImage from "../../components/MUIImage/MUIImage";
// import RBImage from "../../components/RBImage/RBImage";
// import JSImage from "../../components/JSImage/JSImage";
import MUIImageNoAlt from "../../components/MUIImage/MUIImageNoAlt";
import RBImageNoAlt from "../../components/RBImage/RBImageNoAlt";
import JSImageNoAlt from "../../components/JSImage/JSImageNoAlt";

export default function ImageComparison() {
  return (
    <>
      <h1>Image Comparison</h1>
      <hr role="presentation" />
      <h2>MUI ImageList + img</h2>
      <MUIImageNoAlt />
      <hr role="presentation" />
      <h2>RB Image</h2>
      <RBImageNoAlt />
      <hr role="presentation" />
      <h2>Vanilla JS img</h2>
      <JSImageNoAlt />
    </>
  );
}
