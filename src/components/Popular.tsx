import Card from "./Cards";

const Popular = () => {
    const movieDetails = [
        {
            backpic: "images/Loki.png",
            title: "Movie Title 1",
            episodes: "Episode 1",
            genre: "Genre 1"
        },
        {
            backpic: "images/Loki.png",
            title: "Movie Title 2",
            episodes: "Episode 2",
            genre: "Genre 2"
        },
        {
            backpic: "images/Loki.png",
            title: "Movie Title 3",
            episodes: "Episode 3",
            genre: "Genre 3"
        },
        {
            backpic: "images/Loki.png",
            title: "Movie Title 4",
            episodes: "Episode 4",
            genre: "Genre 4"
        },
        // Add more movie details as needed
    ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl not-italic font-extrabold mt-12">
        Popular on TinyMoviez
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {movieDetails.map((movieDetail, index) => (
          <Card key={index} movieDetail={movieDetail} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
