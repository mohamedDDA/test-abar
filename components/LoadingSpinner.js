export default function LoadingSpinner({ fadeOut }) {
  return (
    <div className={`spinner-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}
