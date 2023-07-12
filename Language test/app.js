document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.title').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].title;
    document.querySelector('.description').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].description;
});

var data = {
    "english": {
        "title": "Hello World" ,
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse eum qufuga, odit modi iure commodi. Voluptates molestias voluptate vel, dignissimos quae dolorum assumendaaccusamus ducimus sed doloremque ratione"
    },
    "japanese": {
        "title": "ハロー・ワールド",
        "description" : "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."

    }
}