#include <iostream>
#include <vector>
#include <fstream>
#include <iomanip>
#include <algorithm>
using namespace std;

struct Course {
    string courseName;
    int credits;
    double gradePoint;
};

double calculateGPA(const vector<Course>& courses) {
    double totalCredits = 0;
    double totalGradePoints = 0;
    
    for (const auto& course : courses) {
        totalCredits += course.credits;
        totalGradePoints += course.gradePoint * course.credits;
    }

    return totalGradePoints / totalCredits;
}

void readCoursesFromFile(vector<Course>& courses, const string& filename) {
    ifstream inFile(filename);
    if (!inFile) {
        cerr << "Unable to open file: " << filename << endl;
        exit(1);
    }

    Course course;
    while (inFile >> course.courseName >> course.credits >> course.gradePoint) {
        courses.push_back(course);
    }
    inFile.close(); 
}
void displayCourses(const vector<Course>& courses) {
    cout << setw(15) << "Course Name" << setw(10) << "Credits" << setw(15) << "Grade Points" << endl;
    for (const auto& course : courses) {
        cout << setw(15) << course.courseName << setw(10) << course.credits << setw(15) << course.gradePoint << endl;
    }
}

int main() {
    vector<Course> courses;
    string filename = "courses.txt";

    readCoursesFromFile(courses, filename);

    sort(courses.begin(), courses.end(), [](const Course& a, const Course& b) {
        return a.courseName < b.courseName;
    });

    displayCourses(courses);

    double cgpa = calculateGPA(courses);
    cout << "Cumulative Grade Point Average (CGPA): " << fixed << setprecision(2) << cgpa << endl;

    return 0;
}