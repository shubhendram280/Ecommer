function Error() {
  return (
    <div className="status-message error">
      <span className="error-icon" aria-hidden="true">
        ⚠️
      </span>
      <h2>Something Went Wrong!</h2>
      <p>Please check your internet and try again.</p>
    </div>
  );
}

export default Error;
