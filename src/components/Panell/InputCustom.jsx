const InputCustom = ({ onChange, suma, resta, value }) => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-2">
        <button className="btn btn-danger" type="button" onClick={resta}>
          -
        </button>
      </div>
      <div className="col-7">
        <input
          className="form-control"
          value={value}
          type="number"
          name="paginas"
          min={0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      <div className="col-1">
        <button className="btn btn-danger" type="button" onClick={suma}>
          +
        </button>
      </div>
    </div>
  );
};

export default InputCustom;