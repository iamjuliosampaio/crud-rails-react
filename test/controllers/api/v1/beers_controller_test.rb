require 'test_helper'

class Api::V1::BeersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_beers_index_url
    assert_response :success
  end

  test "should get new" do
    get api_v1_beers_new_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_beers_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_beers_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_beers_destroy_url
    assert_response :success
  end

end
