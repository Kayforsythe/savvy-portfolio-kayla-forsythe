export default function Post(post){
    return `
    <div class="posts">
    <h2>${post.id}</h2> <h3>${post.title}</h3>
    <p>${post.body}</p>

    </div>
    `;
}
