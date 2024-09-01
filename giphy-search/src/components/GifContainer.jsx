function GifContainer({ gifs }) {
    return (
        <ul>
            {gifs.map((gif) => {
                console.log(gif)
                return (
                    <li key={gif.id}><img src={gif.images.original.url} alt="" /></li>
                )
            })}
        </ul>
    )
}

export default GifContainer
