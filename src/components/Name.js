import Logo  from "../components/Logo";

export default function Name() {

  return (
    <div className="d-flex center">
      <Logo /> 
      <div className="text-white center text-center">
        <span className="h4">
          MEDYCZNE CENTRUM SZKOLENIOWO USŁUGOWE
        </span> <br />
        <span className="h5">
          PASJA / DOŚWIADCZENIE / PROFESJONALIZM
        </span>
      </div>
    </div>
  );
}