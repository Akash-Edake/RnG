import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/features/PostSlice'
import Spinner from './Spinner'

const CreatePost = () => {
    const [values, setValues] = useState({ title: "", body: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPost, setShowPost] = useState(false);
    const { title, body } = values;
    const { loading, post } = useSelector(state => ({ ...state.app }));

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({ values }));
        setValues({ title: "", body: "" });
        setShowPost(true);
    }
    //showPost
    const showCreatedPost = () => {
        return (
            <>
                {loading ? <Spinner /> : (
                    <div className="card mt-3" style={{ width: "50%" }}>
                        <div className="card-body">
                            <h5 className="card-title">{post[0].title}</h5>
                            <p className="card-text">{post[0].body}</p>
                            <div className='d-flex align-items-end justify-content-end'>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
    return (
        <>
            <form action="">
                <div className="m-4">
                    <input type="text" className="form-control"
                        id="exampleInputEmail1"
                        placeholder='Enter post title here'
                        value={title}
                        onChange={(e) => setValues({ ...values, title: e.target.value })}
                    />

                    <div className="form-floating">
                        <textarea className="form-control mt-4"
                            id="floatingTextarea2"
                            value={body}
                            onChange={(e) => setValues({ ...values, body: e.target.value })}
                        ></textarea>
                        <label htmlFor="floatingTextarea2" >description</label>
                    </div>
                    <div >
                        <button className="btn btn-success px-3" onClick={() => navigate('/')}>Go Home</button>
                        <button className="btn btn-danger px-3 ms-3" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
            <div className="mt-4">
                {
                    showPost && <div className='ms-4'>{showCreatedPost()}</div>
                }
            </div>
        </>
    )
}

export default CreatePost