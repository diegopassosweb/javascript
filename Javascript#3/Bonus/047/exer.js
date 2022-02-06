const pc = [
    {video: 1400, nome: 'NVIDIA'},
    {video: 2000, nome: 'PLACA'},
];
const videopc = pc.find(function(videopc){
    return videopc.nome === 'NVIDIA';
    
});
console.log(videopc);
