import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, getPost, setEdit, updatePost } from '../redux/features/PostSlice';
import Spinner from './Spinner';

const PostData = () => {
    const [id, setId] = useState();
    const [textBody, setTextBody] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, post, body, edit } = useSelector(state => ({ ...state.app }));

    useEffect(() => {
        if (body) {
            setTextBody(body);
        }
    }, [body])

    const handleFecth = (e) => {
        e.preventDefault();
        // console.log("id", id)
        if (!id) {
            window.alert("please enter Id");
        } else {
            dispatch(getPost({ id }))
            setId("");
        }
    }
    //delete post
    const handleDelete = () => {
        dispatch(deletePost({ id: post[0].id }))
        window.location.reload();
        window.alert("post deleted")
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label fw-bold">Serch By Id</label>
                            <input type="number" className="form-control"
                                id="exampleInputEmail1"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleFecth}>Fetch Post</button>
                        <button type="submit" className="btn btn-success ms-4" onClick={() => navigate('/createpost')}>Create Post</button>
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    loading ? <Spinner /> : (
                        <>
                            {post.length > 0 && (

                                <>
                                    <div className="card mt-3" style={{ width: "50%" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{post[0].title}</h5>
                                            {edit ? (
                                                <>
                                                    <div className="form-floating">
                                                        <textarea className="form-control mt-4"
                                                            id="floatingTextarea2"
                                                            value={textBody}
                                                            onChange={(e) => setTextBody(e.target.value)}
                                                        ></textarea>
                                                        <label htmlFor="floatingTextarea2" >description</label>
                                                    </div>
                                                    <button className="btn btn-success px-3 ms-3" 
                                                    onClick={()=>{
                                                        dispatch(updatePost(
                                                            {
                                                                id:post[0].id,
                                                                title:post[0].title,
                                                                body:textBody
                                                            }
                                                        ))
                                                        dispatch(setEdit({edit: false, body:""}))
                                                    }}
                                                    >save</button>
                                                    <button className="btn btn-danger px-3 ms-3"onClick={()=> dispatch(setEdit({edit: false, body:""}))} >cancle</button>
                                                </>) : (
                                                <>
                                                    <p className="card-text">{post[0].body}</p>
                                                </>
                                            )}
                                            {
                                                !edit && (
                                                    <div className='d-flex align-items-end justify-content-end'>
                                                        <button className="btn btn-success px-3" onClick={()=>dispatch(setEdit({ edit: true, body: post[0].body }))}>edit</button>
                                                        <button className="btn btn-danger px-3 ms-3" onClick={() => { handleDelete()}}>delete</button>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                </>


                            )}

                        </>
                    )
                }
            </div>
        </>
    )
}

export default PostData