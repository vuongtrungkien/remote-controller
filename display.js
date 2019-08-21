let television = new Television("Panasonic", 50, 1);
let remote = new Remote("PanasonicRemote");

function display(television, remote,) {
    let channel = television.getStatusChannel();
    let status = television.getStatus()?"On":"Off";
    let statusChannel = television.getStatusChannel() ? channel : "";
    let vol = television.getVolume();
    let statusVolume = television.getVolume() ? vol : "";

    document.getElementById(television.name + "-Channel").innerHTML = "Status Channel : " + statusChannel;
    document.getElementById(television.name + "-Status").innerHTML = "Status : " + status;
    document.getElementById(television.name + "-Volume").innerHTML = "Volume : " + statusVolume ;
    document.getElementById(television.name).innerHTML = "Name television : " + television.getNameTv();
    document.getElementById(remote.name).innerHTML = "Name : " + remote.getName();
}


display(television, remote);
window.addEventListener("click", function () {
    display(television, remote);
});