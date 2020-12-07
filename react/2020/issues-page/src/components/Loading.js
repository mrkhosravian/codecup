import LoadingGif from '../assets/loading.gif';

function Loading() {
  return (
    <>
      <div className="overlay"></div>
      <span data-testid="loading" className="loading">
        <img src={LoadingGif} width="90" alt="loading..." />
      </span>
    </>
  );
}

export default Loading;
