<?php
	class contact{
		//public function __construct(){
		//	include ('config/connection.php');
		//}
		public function create_contact($Name, $Nick_Name, $Birthday, $Gender, $Address, $Phone_Number, $Email, $State_Of_Origin, $Tribe, $Likes, $Dislikes, $Favourite_Food, $Favourite_Colour, $Favourite_Movie, $Favourite_Musician, $Favourite_Course, $Favourite_Instructor, $Crush, $Picture){
			$host='localhost';
			$user='root';
			$password='';
			$db='slumbook';
			$connect = mysqli_connect($host, $user, $password, $db);
			
			$querry="insert into contacts values('$Name', '$Nick_Name', '$Birthday', '$Gender', '$Address', '$Phone_Number', '$Email', '$State_Of_Origin', '$Tribe', '$Likes', '$Dislikes', '$Favourite_Food', '$Favourite_Colour', '$Favourite_Movie', '$Favourite_Musician', '$Favourite_Course', '$Favourite_Instructor', '$Crush', 'James')";
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