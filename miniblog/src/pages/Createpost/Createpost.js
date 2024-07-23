import styles from "../Createpost/Createpost.module.css"

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../../context/AuthContext"

const Createpost = () => {

  const [ title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [ formError, setFormError]= useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className={styles.Create_post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form>
          <label>
            <span>Titulo:</span>
            <input type="text" name="title" required placeholder="Pense em um bom título..." value={title} onChange={(e)=>setTitle(e.target.value)}/>

          </label>
          <label>
            <span>URL da imagem:</span>
            <input type="text" name="image" required placeholder="Insira uma imagem que representa o post..." value={image} onChange={(e)=>setImage(e.target.value)}/>

          </label>
          <label>
            <span>Conteúdo</span>
            <textarea name="body" required placeholder="Insira conteúdo do post..." value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>

          </label>

          <label>
            <span>Conteúdo</span>
            <input name="tags" required placeholder="Insira as tags separadas por Vírgula" value={tags} onChange={(e)=>setTags(e.target.value)}/>
          </label>
          <button className="btn">Postar</button>
    {/*       {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
        </form>
    </div>
  )
}

export default Createpost;