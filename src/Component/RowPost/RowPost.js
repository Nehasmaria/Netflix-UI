import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl,API_KEY } from '../../Constants/Constants'
import  Axios  from '../../Axios'
import YouTube from 'react-youtube'


function RowPost(props) {
const [movie, setMovie] = useState([])
const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    Axios.get(props.Url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    Axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(id)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('empty array')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
        )}  
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost
