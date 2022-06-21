//@ts-nocheck
import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import axiosClient from 'utility/axiosClient'

const HomePage = ()=>{
	
	const[posts,setPosts] = useState([]);
	
	const getPosts =()=>{
		axiosClient.get('/posts')
		.then(response=>{
			console.log(response)
			setPosts(response.data.data)
		})
		.catch(err=>{
			console.log(err)
		})
	}
	useEffect(()=>{
		getPosts()
	},[])

const Delete=(id)=>{
	axiosClient.delete(`/posts/${id}`)
	.then(response=>{
		console.log(response)
		
      toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
		getPosts();
		
	})
	.catch((err)=>{
		console.log(err)
	})
	
}

	return(
		<div className='home-folder'>
			<table>
				<thead>
					<tr>
						
						<th>Title</th>
						<th>Body</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						posts.map((post)=>{
							return(
								<tr key ={post._id}>
						<td>{post.title}</td>
						<td>{post.description}</td>
	
						<div>
							<Link to ={`/edit/${post._id}`}><button >Edit</button></Link>
							<button onClick={()=>Delete(post._id)}>Delete</button>
							<Link to="/add"><button>Add</button></Link>
						</div>
						
					</tr>
							)
						})
					}
					
				</tbody>
		
			</table>

			
		</div>
		
	)
}
export default HomePage; 