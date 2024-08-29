package miniProject;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AdminDAO {

	// 관리자 상태변경
	public void changeAps() {
		AdminVO adminVO = new AdminVO();
		String id = null;
		int aps = 0;

		while (true) {
			System.out.println("변경할 아이디 입력 >>");
			id = ConnManager.getScanner().next();

			System.out.println("변경할 역할 입력(1. SUPER 2.SUB)");
			if (ConnManager.getScanner().hasNextInt()) {
				aps = ConnManager.getScanner().nextInt();
			} else {
				System.out.println("숫자만 입력해주세요.");
				ConnManager.getScanner().next();
				continue;
			}

			if (adminVO.getArole() == "SUPER") {
				changeApsSQL(id, aps);
			} else {
				System.out.println("변경 실패");
				System.out.println("상태 변경은 SUPER 관리자만 변경하실 수 있습니다.");
			}

		}

	}

	public void changeApsSQL(String id, int aps) {
		String sql = "update admin set arole = ? where aid = ?";
		PreparedStatement ps = null;

		if (aps == 1) {
			// SUPER 롤 부여
			try {
				ps = ConnManager.getConnection().prepareStatement(sql);
				ps.setString(1, "'SUPER'");
				ps.setString(2, id);
				int updateCount = ps.executeUpdate();

				if (updateCount > 0) {
					System.out.println("변경 성공");
				} else {
					System.out.println("변경 실패");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					ps.close();
					ConnManager.CloseConnection();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		} else {
			// SUB 롤 부여
			try {
				ps = ConnManager.getConnection().prepareStatement(sql);
				ps.setString(1, "'SUB'");
				ps.setString(2, id);
				int updateCount = ps.executeUpdate();

				if (updateCount > 0) {
					System.out.println("변경 성공");
				} else {
					System.out.println("변경 실패");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					ps.close();
					ConnManager.CloseConnection();
				} catch (SQLException e) {
					e.printStackTrace();
				}

			}

		}

	}
}
