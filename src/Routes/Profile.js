import profileImg from '../images/01-0112.jpg';

function Profile() {
	return (
		<div className="profile">
			<img src={profileImg} alt="profile img"></img>
			<div>
				<h2>
					김미지<span> / KIM MI JI</span>
				</h2>
				<ul>
					<li>
						<span>생년월일</span> 1991. 03. 15
					</li>
					<li>
						<span>키 / 몸무게</span> 168cm / 48kg
					</li>
					<li>
						<span>혈액형</span> AB형
					</li>
					<li>
						<span>데뷔</span> 2014년 영화 '레디액션 청춘'
					</li>
					<li>
						<span>이메일</span> feather___@naver.com
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Profile;
