<?php
	class contact{
		//public function __construct(){
		//	include ('config/connection.php');
		//}
		public function create_contact($Name, $Nick_Name, $Birthday, $Gender, $Address, $Phone_Number, $Email, $Picture){
			$host='localhost';
			$user='root';
			$password='';
			$db='slumbook';
			$connect = mysqli_connect($host, $user, $password, $db);
			
			$querry="insert into contacts values('$Name', '$Nick_Name', '$Birthday', '$Gender', '$Address', '$Phone_Number', '$Email')";
			mysqli_query($connect, $querry) or die('could not insert' . mysqli_error($connect));
			}
		
	function view_all(){
			$host='localhost';
			$user='root';
			$password='';
			$db='slumbook';
			$connect = mysqli_connect($host, $user, $password, $db);
			$querry="SELECT * FROM contacts";
			$records= mysqli_query($connect, $querry) or die("failed to fetch" . mysqli_error($connect));
			return $records;
	}
}
?>
